// app/auth/ResetPassword/page.jsx
"use client";

import { Suspense } from "react";
import ResetPassword from "../../../../Components/ResetPassword";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading reset password form...</div>}>
      <ResetPassword />
    </Suspense>
  );
}
