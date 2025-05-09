import React from 'react';
import Icon1 from '../assets/Icon1.svg'
import Icon2 from '../assets/Icon2.svg'
import Icon3 from '../assets/Icon3.svg'
import Icon4 from '../assets/Icon4.svg'

interface CategorySelectionProps {
  onSelect: (category: string) => void;
}

  const categories = [
    { name: 'Food', icon: Icon1 },
    { name: 'Music', icon: Icon2 },
    { name: 'Sports', icon: Icon3 },
    { name: '9ja History', icon: Icon4 }
  ];
  
  const CategorySelection: React.FC<CategorySelectionProps> = ({ onSelect }) => {
    return (
      <>
        <div className="text-center p-5">
          <h3 className="mb-4" style={{ fontFamily: 'Rubik' }}>Pick a Category</h3>
          <div className="d-flex justify-content-center flex-wrap gap-3">
          {categories.map((cat) => (
            <div key={cat.name} className='d-flex flex-column align-items-center'>
              <button onClick={() => onSelect(cat.name)} className='btn btn-light p-3 rounded shadow'>
                <img src={cat.icon} alt={cat.name} className='mb-2' style={{ fontSize: '2rem' }} />
              </button>
              <p className='fw-bold'>{cat.name}</p>
            </div>
          ))}

          </div>
        </div>
      </>
    )
  }
    
export default CategorySelection;
  