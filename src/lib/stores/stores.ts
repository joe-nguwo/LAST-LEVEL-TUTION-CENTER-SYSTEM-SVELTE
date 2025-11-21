import { writable, Writable } from "svelte/store";
import type  {token} from "../types/auth";

export const auth = writable<token>({})

