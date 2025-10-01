import { redirect } from 'next/navigation';

export default function RootPage() {
  // When users visit "/", immediately send them to sign-up
  redirect('/auth/sign-up'); 
}