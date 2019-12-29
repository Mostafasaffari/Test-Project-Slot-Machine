import React, { useState, useRef, useEffect } from "react";

import Tag from "../ui-kit/tag";
import Icon from "../ui-kit/icon";
import Input from "../ui-kit/input/";

import TagFilterWrapper from "./tagFilter.style";
import Button from "../ui-kit/button/button";

interface IProps {
  buttonTextFilter: string;
  newTagTitle: string;
  onFilter: (tags: string[]) => void;
}
const TagFilter: React.FC<IProps> = ({
  buttonTextFilter,
  newTagTitle,
  onFilter
}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const inputTagRef = useRef(null);

  useEffect(() => {
    if (inputTagRef !== null && inputTagRef.current !== null) {
      const current = inputTagRef!.current! as HTMLInputElement;
      current.focus();
    }
  }, [inputVisible]);
  const handleCloseTag = (removedTag: string) => {
    const newList = tags.filter(tag => tag !== removedTag);
    setTags(newList);
  };
  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputValue("");
    setInputVisible(false);
  };
  const handleFilter = () => {
    onFilter(tags);
  };
  return (
    <TagFilterWrapper>
      <div className="tag__filter--tags">
        {tags.length > 0 &&
          tags.map(tag => (
            <Tag key={tag} closable onClose={handleCloseTag}>
              {tag}
            </Tag>
          ))}
      </div>
      <div className="tag__filter__newtag">
        {inputVisible && (
          <Input
            ref={inputTagRef}
            type="text"
            size="small"
            style={{ width: 100 }}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputConfirm}
            onPressEnter={handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag onClick={showInput} className="tag__filter__newtag--addtag">
            <Icon type="plus" /> {newTagTitle}
          </Tag>
        )}
      </div>
      {tags && tags.length > 0 && (
        <Button onClick={handleFilter}>{buttonTextFilter}</Button>
      )}
    </TagFilterWrapper>
  );
};

export default TagFilter;
