import React from 'react';

import './clipboard-copy.styles.scss';
import ClipIcon from '../../assets/icons/clip.icon';

function ClipboardCopy({ value }) {
  function handleClick(e) {
    const el = document.createElement('textarea');
    el.value = e.currentTarget.value;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    return null;
  }

  return (
    <div className='clipboard-copy'>
      <button onClick={(e) => handleClick(e)} value={value}>
        <ClipIcon />
      </button>
    </div>
  );
}

export default ClipboardCopy;
