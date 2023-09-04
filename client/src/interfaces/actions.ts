export type AuthState = {
  user: User | null;
  token: string | null;
};

type BaseType<Type, Payload = {}> = { type: Type; payload: Payload };

export type LoginAction = BaseType<"LOGIN", { user: User }>;
export type LogoutAction = BaseType<"LOGOUT", { user: User }>;
export type GetUserAction = BaseType<"GET_USER", { user: User }>;
export type AuthAction = LoginAction | LogoutAction | GetUserAction;
export type AuthActionType = AuthAction["type"];
