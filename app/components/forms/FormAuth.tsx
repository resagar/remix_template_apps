import { z } from "zod";
import { Form } from "./form";
import { Input } from "./Input";
import { ErrorField, ErrorGlobal } from "./Errors";

export const schema = z.object({
  email: z.string().min(1, "Must contain at least 1 character(s)").email(),
  password: z.string().min(1, "Must contain at least 1 character(s)"),
});

export const FormAuth = ({ buttonTitle }: { buttonTitle: string }) => (
  <>
    <Form
      schema={schema}
      inputTypes={{ email: "email", password: "password" }}
      inputComponent={Input}
      fieldErrorsComponent={({ children }) => (
        <ErrorField> {children} </ErrorField>
      )}
      globalErrorsComponent={({ children }) => (
        <ErrorGlobal> {children} </ErrorGlobal>
      )}
    >
      {({ Field, Errors, Button }) => (
        <div className="flex flex-col justify-start gap-8">
          <div className="flex flex-col gap-4">
            <Errors />
            <Field name="email" className="flex flex-col" />
            <Field name="password" className="flex flex-col" />
          </div>
          <div className="flex flex-row justify-center">
            <Button className="btn btn-sm btn-primary w-28 text-slate-200">
              {buttonTitle}
            </Button>
          </div>
        </div>
      )}
    </Form>
  </>
);
