import {
  getApiEndpoint,
  ops,
} from "@/app.config";
import { fetchBE } from "@/lib/actions";

const log = console.log; // SCAFF;

export async function getTasks() {
  const res = await fetchBE(
    getApiEndpoint(ops.tasks.find),
    'GET',
  );

  const data = await res.json();
  // log(data); // SCAFF

  return data.data;
}
