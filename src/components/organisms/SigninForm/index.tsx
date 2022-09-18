import { useForm } from "react-hook-form";
import Button from "components/atoms/Button";
import Input from "components/atoms/Input";
import Text from "components/atoms/Text";
import Box from "components/layout/Box";

export type SigninFormData = {
  username: string;
  password: string;
};

type SigninFormProps = {
  /**
   * サインインボタンを押した時のイベントハンドラ
   */
  onSignin?: (username: string, password: string) => void;
};

const SigninForm = ({ onSignin }: SigninFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>();

  const onSubmit = (data: SigninFormData) => {
    const { username, password } = data;

    onSignin && onSignin(username, password);
  };
  /**
   * registerはいかが展開される
   * id="email"
   * name={name}
   * onChange={onChange}
   * onBlur={onBlur}
   * ref={ref}
   * が展開される
   */

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Input
          {...register("username", {
            required: { value: true, message: "入力が必須の項目です。" },
          })}
          type="text"
          placeholder="ユーザ名"
          hasError={!!errors.username}
        ></Input>
        {errors.username && (
          <Text color="danger" variant="small" paddingLeft={1}>
            {errors.username.message}
          </Text>
        )}
      </Box>
      <Box marginBottom={2}>
        {/* サインインパスワードの入力 */}
        <Input
          {...register("password", { required: true })}
          name="password"
          type="password"
          placeholder="パスワード"
          hasError={!!errors.password}
        />
        {errors.password && (
          <Text color="danger" variant="small" paddingLeft={1}>
            パスワードは必須です
          </Text>
        )}
      </Box>
      <Button width="100%" type="submit">
        サインイン
      </Button>
    </form>
  );
};

export default SigninForm;
