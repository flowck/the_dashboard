import { Box } from "components/Box/Box";
import { Button } from "components/Button/Button";
import { FormControl } from "components/FormControl/FormControl";
import { Label } from "components/Label/Label";
import { Link } from "components/Link/Link";
import { Meta } from "components/Meta/Meta";
import { Text } from "components/Text/Text";
import { TextField } from "components/TextField/TextField";
import { Typography } from "components/Typography/Typography";
import { AuthLayout } from "layout/Auth";
import { http } from "libs/http";
import { FormEvent, useState } from "react";

export default function SignIn() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AuthLayout>
      <Meta title="Sign In" />
      <Box
        as="form"
        css={{ width: "100%" }}
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          setError("");
          setIsLoading(true);
          onSignIn(data.email, data.password)
            .then()
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
        }}
      >
        <Box as="header" css={{ marginBottom: "$6" }}>
          <Typography as="h1" variant="2" css={{ display: "block" }}>
            Sign into your account
          </Typography>
        </Box>
        <Box>
          <FormControl>
            <Label>Email</Label>
            <TextField size="2" type="email" />
          </FormControl>
          <FormControl>
            <Label>Password</Label>
            <TextField size="2" type="password" />
          </FormControl>
          <Button type="submit" size="2" fullWidth="yes" variant="primary">
            Sign In
          </Button>
        </Box>

        <Box css={{ marginTop: "$6" }}>
          <Text variant="copy" css={{ color: "$shade500" }}>
            Or <Link href="/signup">sign up</Link> instead, in case you {"don't"} have an account.
          </Text>
        </Box>
      </Box>
    </AuthLayout>
  );
}

function onSignIn(email: string, password: string) {
  return http.post("/api/signin", { email, password });
}
