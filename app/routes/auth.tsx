import AuthForm from '~/components/AuthForm';

export default function Auth() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Login/Signup</h2>
      <AuthForm />
    </div>
  );
}
