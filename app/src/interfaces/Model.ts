import { Printable } from "../utils/printable";
import { Comparable } from "./comparable";

export interface Model<T> extends Printable, Comparable<T> {

}