import { PlusIcon } from "@radix-ui/react-icons";
import { Box } from "components/Box/Box";
import { Button } from "components/Button/Button";
import { Card } from "components/Card/Card";
import { Meta } from "components/Meta/Meta";
import { Modal } from "components/Modal/Modal";
import { TextField } from "components/TextField/TextField";
import { Typography } from "components/Typography/Typography";
import { Dashboard } from "layout/Dashboard";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Dashboard>
      <Meta title="Home" />
      <Box
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="1" as="h1">
          Organization
        </Typography>
        <Modal
          title="Create organization"
          description="An organization is a top-level resource in WorkOS that usually represents one of your customers."
          openModalButton={
            <Button variant="primary">
              <PlusIcon />
              Create organization
            </Button>
          }
          confirmButton={<Button variant="primary">Save changes</Button>}
        >
          <div></div>
        </Modal>
      </Box>
      <Card css={{ margin: "$4 0" }}>
        <TextField size="1" css={{ width: "100%" }} placeholder="Search name or domain" />
      </Card>
    </Dashboard>
  );
};

export default Home;
