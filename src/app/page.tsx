// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function Root() {
  redirect('/home'); // change to '/browse' or '/profile-summary' if that's your real entry
}