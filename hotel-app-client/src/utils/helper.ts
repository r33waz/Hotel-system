import { useSelector } from "react-redux"


export const Gettoken = () => {
    const { jwt } = useSelector(
      (state: any) => state.persistedReducer.authReducer
    );
    return jwt
}