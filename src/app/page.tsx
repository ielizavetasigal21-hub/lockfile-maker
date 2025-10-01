// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect users who visit "/" to the home page (or profile-summary if that’s your main entry)
  redirect('/home');  
  // If your real entry is profile-summary, replace with:
  // redirect('/profile-summary');
}