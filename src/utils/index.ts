import { useState } from 'react';

const ARRAY_SIZE = 5;
const RESPONSE_TIME_IN_MS = 1000;

export interface Item {
  id?: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  city: string;
}

interface Response {
  hasNextPage: boolean;
  data: Item[];
}

async function loadItems(startPoint = 0): Promise<Response> {
  let endPoint = startPoint + ARRAY_SIZE;
  const response = await fetch(`http://localhost:3000/table?_start=${startPoint}&_end=${endPoint + 1}`)
  let serverData: Item[] = await response.json()

  const responseLength = await fetch(`http://localhost:3000/table`)
  let serverDataLength: Item[] = await responseLength.json()
  
  return new Promise((resolve) => {
    let newArray: Item[] = [];

    setTimeout(() => {
      for (let i = 0; i < ARRAY_SIZE; i++) {
        if (serverData[i]) newArray = [...newArray, serverData[i]];
      }
      resolve({ hasNextPage: endPoint < serverDataLength.length, data: newArray });
    }, RESPONSE_TIME_IN_MS);
  });
}

export function useLoadItems() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<Item[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [error] = useState<Error>();

  async function loadMore() {
    setLoading(true);
    try {
      const { data, hasNextPage: newHasNextPage } = await loadItems(
        items.length
      );
      setItems((current) => [...current, ...data]);
      setHasNextPage(newHasNextPage);
    } finally {
      setLoading(false);
    }
  }

  return { loading, items, hasNextPage, error, loadMore };
}


