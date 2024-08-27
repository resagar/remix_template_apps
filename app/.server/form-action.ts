import { createFormAction } from "remix-forms";
import { redirect, json } from "@remix-run/node";

export const formAction = createFormAction({ redirect, json });
