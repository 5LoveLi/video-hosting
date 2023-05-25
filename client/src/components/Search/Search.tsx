import React, {useState} from 'react';
import { Input, Space  } from 'antd';
import './Search.css'

const Search = Input.Search;


export const SearchForm: React.FC = () => {
  const [inputSearch, setInputSearch] = useState('');
  

  const onSearch = (event: string) => {
    console.log(event);
    // передать данные в компонент Tape
    // или перенаправить на /:str
    setInputSearch('');
  }

  const updateInputValue = (evt: any) => {
    setInputSearch(evt.target.value);
  }

  return (
    <div >
    <Space direction="vertical" >
      <Search placeholder="спроси, а я попытаюсь найти)" onChange={updateInputValue} value={inputSearch} onSearch={onSearch} style={{ width: 600 }} />
    </Space>
    </div>
  )
}