import React from 'react'

function Topbutton() {
  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '999' }}>
                    <button
                        id="back_to_top"
                        type="button"
                        className="back-to-top-btn"
                        style={{
                            backgroundColor: '#a6a182',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'background-color 0.3s ease'
                        }}
                    >
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 6L6 1L1 6" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
  )
}

export default Topbutton
