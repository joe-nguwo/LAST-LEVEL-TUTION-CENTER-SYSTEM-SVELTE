import { writable } from "svelte/store";
import type  {token} from "../types/auth";

export const auth = writable<boolean>(true)

