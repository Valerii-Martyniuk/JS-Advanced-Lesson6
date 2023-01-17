export interface UserInterface {
  id: number;
  username: string;
  email: string;
  password: string;
}
export interface BlogInterface {
  id: number;
  postedBy: string;
  topic: string;
  date: Date;
  message: string;
}
