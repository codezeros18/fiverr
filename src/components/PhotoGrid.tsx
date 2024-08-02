import React from 'react';

import Photo1 from "../assets/photo1.jpg";
import Photo2 from "../assets/photo2.jpg";
import Photo3 from "../assets/photo3.jpg";
import Photo4 from "../assets/photo4.jpg";
import Photo5 from "../assets/photo5.jpg";
import Photo6 from "../assets/photo6.jpg";
import Photo7 from "../assets/photo7.jpg";
import Photo8 from "../assets/photo8.jpg";
import Photo9 from "../assets/photo9.jpg";
import Photo10 from "../assets/photo10.jpg";
import Photo11 from "../assets/photo11.jpg";
import Photo12 from "../assets/photo12.jpg";

interface Photo {
  id: number;
  url: string;
}

const photos : Photo[] = [
    {id: 1 ,url: Photo1},
    {id: 2, url: Photo2},
    {id: 3, url: Photo3},
    {id: 4, url: Photo4},
    {id: 5, url: Photo5},
    {id: 6, url: Photo6},
    {id: 7, url: Photo7},
    {id: 8, url: Photo8},
    {id: 9, url: Photo9},
    {id: 10, url: Photo10},
    {id: 11, url: Photo11},
    {id: 12, url: Photo12},
  ];

const PhotoGrid: React.FC = () => {
  const renderPhotoColumn = (startIndex: number) => {
    return (
      <div className="grid gap-4">
        {photos.slice(startIndex, startIndex + 3).map((photo) => (
          <div key={photo.id}>
            <img className="h-auto max-w-full rounded-lg" src={photo.url} alt={`Photo ${photo.id}`} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
      {Array.from({ length: 4 }, (_, columnIndex) => renderPhotoColumn(columnIndex * 3))}
    </div>
  );
};

export default PhotoGrid;
