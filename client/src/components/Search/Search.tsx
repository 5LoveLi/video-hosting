import React, {useState} from 'react';
import { Input, Space  } from 'antd';
import './Search.css'
import { VideoService } from '../../services/Video/VideoService';
import { useNavigate } from 'react-router-dom';
import { TapeDTO, VideoPlayType } from '../../services/Video/VideoService.types';

const Search = Input.Search;


export const SearchForm: React.FC = () => {
  const [ videoData, setVideoData] = useState<Array<TapeDTO>>([])
  const [inputSearch, setInputSearch] = useState('');
  const navigate = useNavigate();
  

  const onSearch = async (event: string) => {
    console.log(event);
    
    const cardsData = await VideoService.search(event)
    setVideoData(cardsData)
    navigate(`/viewing/${cardsData[0].id}`)
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