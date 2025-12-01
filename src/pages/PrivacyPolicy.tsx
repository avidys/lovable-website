import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    // Redirect to external privacy policy page
    window.location.href = "https://www.avidys.net/Privacy-Policy.html";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <p className="mb-4 text-xl text-muted-foreground">Redirecting to Privacy Policy...</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

