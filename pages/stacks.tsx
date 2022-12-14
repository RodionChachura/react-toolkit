import type { NextPage } from "next";
import styled, { useTheme } from "styled-components";
import { HSLA } from "lib/ui/colors/HSLA";

import { HStack, VStack } from "lib/ui/Stack";
import { getSameDimensionsCSS } from "lib/ui/utils/getSameDimensionsCSS";
import { DemoPage } from "components/DemoPage";
import { Panel } from "lib/ui/Panel/Panel";

const Conent = styled(Panel)<{ $color: HSLA }>`
  ${getSameDimensionsCSS(80)};
  background: ${({ $color }) => $color.toCssValue()};
`;

const StacksPage: NextPage = () => {
  const { colors } = useTheme();
  return (
    <DemoPage youtubeVideoId="iVYo-gqyi90" title="Stacks">
      <VStack alignItems="start" gap={40}>
        <Panel>
          <HStack gap={20}>
            <Conent $color={colors.primary} />
            <Conent $color={colors.primary} />
            <Conent $color={colors.primary} />
            <Conent $color={colors.primary} />
          </HStack>
        </Panel>
        <Panel>
          <VStack gap={20}>
            <Conent $color={colors.attention} />
            <Conent $color={colors.attention} />
            <Conent $color={colors.attention} />
            <Conent $color={colors.attention} />
          </VStack>
        </Panel>
      </VStack>
    </DemoPage>
  );
};

export default StacksPage;
