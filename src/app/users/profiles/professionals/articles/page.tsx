'use client';
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import CreatePage from './managers/create/page';
import SectionDisplay from './managers/list';
import ManagerPage from './managers/page';

interface Article {
  id: number;
  category: string;
  title: string;
  content: string;
  tags: string[];
  status: string;
  images: string[];
}

const ArticleManagerPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  


  return (
    <div className="w-[100%]  flex flex-col p-2">
      < ManagerPage />
      {/* Display list of articles */}
    </div>
  );
};

export default ArticleManagerPage;