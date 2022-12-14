import { HStack } from "lib/ui/Stack";
import { hideScrollbarsCSS } from "lib/ui/utils/hideScrollbarsCSS";
import styled from "styled-components";
import { TabNavigationItem } from "./TabNavigationItem";

interface TabNavigationProps<T extends string | number | symbol> {
  views: readonly T[];
  getViewName: (view: T) => string;
  activeView: T;
  onSelect: (option: T) => void;
  groupName: string;
}

const Container = styled(HStack)`
  gap: 4px;
  position: relative;
  overflow-x: auto;
  ${hideScrollbarsCSS};
`;

export function TabNavigation<T extends string | number | symbol>({
  views,
  getViewName,
  activeView,
  onSelect,
  groupName,
}: TabNavigationProps<T>) {
  return (
    <Container>
      {views.map((view) => {
        const name = getViewName(view);
        return (
          <TabNavigationItem
            groupName={groupName}
            isSelected={view === activeView}
            value={name}
            onSelect={() => onSelect(view)}
            key={name}
          >
            {name}
          </TabNavigationItem>
        );
      })}
    </Container>
  );
}
