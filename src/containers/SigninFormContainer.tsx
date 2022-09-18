import SigninForm from "components/organisms/SigninForm";
import { useAuthContext } from "contexts/AuthContext";
import { useGlobalSpinnerActionsContext } from "contexts/GlobalSpinnerContext";

interface SigninFormContainerProps {
  /**
   * サインインした時に呼ばれるイベントハンドラ
   * 遷移する
   */
  onSignin: (error?: Error) => void;
}

/**
 * サインインフォームコンテナ
 */
const SigninFormContainer = ({ onSignin }: SigninFormContainerProps) => {
  const { signin } = useAuthContext();
  const setGlobalSpinner = useGlobalSpinnerActionsContext();

  const handleSignin = async (username: string, password: string) => {
    try {
      setGlobalSpinner(true);
      await signin(username, password);
      onSignin && onSignin();
    } catch (err: unknown) {
      if (err instanceof Error) {
        onSignin && onSignin(err);
      }
    } finally {
      setGlobalSpinner(false);
    }

    return <SigninForm onSignin={handleSignin} />;
  };
};
