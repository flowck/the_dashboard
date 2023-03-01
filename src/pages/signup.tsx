import { Box } from "components/Box/Box";
import { Button } from "components/Button/Button";
import { FormControl } from "components/FormControl/FormControl";
import { Label } from "components/Label/Label";
import { Meta } from "components/Meta/Meta";
import { Text } from "components/Text/Text";
import { TextField } from "components/TextField/TextField";
import { Typography } from "components/Typography/Typography";
import { config } from "config";
import { AuthLayout } from "layout/Auth";
import Link from "next/link";

export default function SignUp() {
  return (
    <AuthLayout>
      <Meta title="Sign In" />
      <Box as="form" css={{ width: "100%" }}>
        <Box as="header" css={{ marginBottom: "$6" }}>
          <Typography as="h1" variant="2" css={{ display: "block" }}>
            Create your account
          </Typography>
        </Box>
        <Box>
          <FormControl>
            <Label>First name</Label>
            <TextField size="2" type="text" name="firstName" />
          </FormControl>
          <FormControl>
            <Label>Last name</Label>
            <TextField size="2" type="text" name="lastName" />
          </FormControl>
          <FormControl>
            <Label>Email</Label>
            <TextField size="2" type="email" />
          </FormControl>
          <FormControl>
            <Label>Password</Label>
            <TextField size="2" type="password" />
          </FormControl>
          <FormControl>
            <Label>Company name</Label>
            <TextField size="2" type="text" name="companyName" />
          </FormControl>
          <Button size="2" fullWidth="yes" variant="primary">
            Proceed
          </Button>
        </Box>

        <Box css={{ marginTop: "$6" }}>
          <Text variant="copy" css={{ color: "$shade500" }}>
            By signing up, you agree to our <Link href={config.site.termsOfService}>Terms of Service</Link> and
            <Link href={config.site.privacyPolicy}>Privacy Policy</Link>
          </Text>
        </Box>
      </Box>
    </AuthLayout>
  );
}
