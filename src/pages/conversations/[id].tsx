import Sidebar from "@/components/Sidebar";
import { getRecipientEmail } from "@/utils/getRecipientEmail";
import { CssBaseline } from "@mui/material";
import { auth, db } from "config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { Conversation } from "types";

interface Props {
  conversation: Conversation;
}

const StyledContainer = styled.div`
  display: flex;
`;

const Conversation = ({ conversation }: Props) => {
  const [loggedInUser, _loading, _error] = useAuthState(auth);

  return (
    <StyledContainer>
      <Head>
        <title>
          Conversation with{" "}
          {getRecipientEmail(conversation.users, loggedInUser)}
        </title>
      </Head>

      <Sidebar />

      <h1>Message</h1>
    </StyledContainer>
  );
};

export default Conversation;

export const getServerSideProps: GetServerSideProps<
  Props,
  { id: string }
> = async (context) => {
  const conversationId = context.params?.id;

  // get conversation to know who we are chatting with
  const conversationRef = doc(db, "conversations", conversationId as string);
  const conversationSnapshot = await getDoc(conversationRef);

  return {
    props: {
      conversation: conversationSnapshot.data() as Conversation,
    },
  };
};
