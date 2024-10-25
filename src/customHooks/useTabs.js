import {useState} from "react";

export const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  },
  {
    tab: "Section 3",
    content: "I'm the content of the Section 3"
  },
];

export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if(!allTabs || !Array.isArray(allTabs)) {
    return ;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};