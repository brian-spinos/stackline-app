export interface SeachState {
  query: string;
  results: DataResult[];
  value: number;
  searchData: DataResult[];
  isLoading: boolean;
  error: string;
}

export interface SearchResult {
  id: string;
  title: string;
  category: string;
}

export interface DataResult {
  data: object[];
}

export enum CATEGORIES {
  FRUITS = "fruits",
  VEGETABLES = "vegetables",
  SNACK = "snack",
}

// Notifications

export enum NotificationTypes {
  SUCCESS = "success",
  ERROR = "error",
  INFO = "info",
}

export type notificationType = "success" | "error" | "info";

export interface Notification {
  id: string;
  message: string;
  type: notificationType;
}

export interface NotificationState {
  notifications: Notification[];
}
