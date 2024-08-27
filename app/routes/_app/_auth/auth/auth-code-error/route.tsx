import { Link } from "@remix-run/react";
import { AlertTriangle } from "lucide-react";

export default function AuthCodeError() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <AlertTriangle className="mb-3 size-9 text-yellow-600" />
        <p>ha ocurrido un error en la verificacion de email.</p>
        <Link to="/" className="btn btn-link">
          Volver a intentar la verificacion de email
        </Link>
      </div>
    </>
  );
}
