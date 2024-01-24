import Posts from "@/components/Community/Posts/Posts";
import Premium from "@/components/Community/Premium";
import Recommendations from "@/components/Community/Recommendations";
import PageContent from "@/components/Layout/PageContent";
import { auth } from "@/firebase/clientApp";
import useCommunityData from "@/hooks/useCommunityData";
import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";

function index() {
  const [user, loadingUser] = useAuthState(auth);
  const { communityStateValue } = useCommunityData();

  return (
    <>
    {user && <PageContent>
        <>
          <Tabs>
            <Flex background={"white"}>
              <TabList>
                <Tab>OVERVIEW</Tab>
                <Tab>POSTS</Tab>
                <Tab>COMMENTS</Tab>
                <Tab>HISTORY</Tab>
                <Tab>SAVED</Tab>
                <Tab>HIDDEN</Tab>
              </TabList>
            </Flex>
           <Flex justifyContent={"center"} alignItems={"center"} height={"80vh"}>
            <TabPanels>
              <TabPanel>
                {communityStateValue.currentCommunity ? (
                  <Posts communityData={communityStateValue.currentCommunity} />
                ): <p>hmm... looks like you haven't Posted anything yet</p>}
              </TabPanel>
              <TabPanel>
                <p>hmm... u/{user.displayName} hasn't posted yet</p>
              </TabPanel>
              <TabPanel>
                <p>hmm... u/{user.displayName} hasn't commented on anything</p>
              </TabPanel>
              <TabPanel>
                <p>hmm... u/{user.displayName} hasn't commented on anything</p>
              </TabPanel>
              <TabPanel>
                <p>hmm... looks like you haven't saved anything yet</p>
              </TabPanel>
              <TabPanel>
                <p>hmm... looks like you haven't hidden anything yet</p>
              </TabPanel>
            </TabPanels>
            </Flex>
          </Tabs>
        </>
        <>
          <Recommendations />
          <Premium />
        </>
      </PageContent>}
        </>
  );
}

export default index;
