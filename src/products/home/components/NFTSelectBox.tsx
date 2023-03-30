import React, { useMemo, useState, useEffect } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { INFTINfo, ITokenInfo } from '@app/contexts'
import { formatUnits } from '@ethersproject/units'

interface InputProps {
    selectedNFTId: number
    nfts: INFTINfo[]
    readOnly: boolean
    currencyTokenInfo: ITokenInfo
    onChange: (id: number) => void
}

const MenuProps = {
    sx: {
        "ul": {
            backgroundColor: '#000E2F'
        },
        "&& .Mui-selected": {
            backgroundColor: "#000A21"
        },
        "& .Mui-Root": {
        },
        "&& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
            borderWidth: "0px"
        },
        "& .MuiMenuItem-root.Mui-selected:hover": {
            backgroundColor: "#000A21",
            cursor: 'default'
        }
    },
    field: {
        border: "none"
    },
    PaperProps: {
        style: {
            maxHeight: '280px',
            boxShadow: '1px 1px 5px #000'
        },
    }
}

const MuiSelectStyle = {
    // backgroundColor: '#000E2F',    
    padding: '0px 8px',
    borderRadius: '4px',
    "&:focus": {
        // backgroundColor: '#fff',
        "&& fieldset": {
            border: "3px solid green"
        }
    }
    // paddingLeft: '8px'    
}

const MenuItemStyle = (isLast: boolean) => {
    return {
        borderBottom: isLast ? 'none' : '1px solid #000A21',
        display: 'flex',
        alignItems: 'center',
        "&:lastChild": {
            borderBottom: 'none'
        }
    }
}

export default function NFTSelectBox({ selectedNFTId, nfts, readOnly, currencyTokenInfo, onChange }: InputProps) {

    return (
        <div className="w-full flex flex-col rounded-md gap-[2px] flex-1 p-4 border border-[#112030]">
            <div className='text-[#00CEFF] text-[16px]'>
                Select NFT
            </div>
            <FormControl fullWidth variant="standard" sx={{ border: 'none' }}>
                <Select
                    disableUnderline
                    // input={<OutlinedInput />}
                    inputProps={{ 'aria-label': 'Without label' }}
                    value={selectedNFTId}
                    onChange={(event) => onChange(event.target.value as number)}
                    sx={MuiSelectStyle}
                    MenuProps={MenuProps}
                    readOnly={readOnly}
                >
                    {
                        nfts.map((item, index) => {
                            return (<MenuItem value={item.id} style={MenuItemStyle(index === nfts.length - 1 ? true : false)} key={index}>
                                <div className='w-full flex justify-between items-center'>
                                    <div className='w-full flex gap-4 items-center'>
                                        <div className='max-w-[32px]'>
                                            <img src={item.metadata.image} width="100%" alt="" />
                                        </div>
                                        <div className='text-[16px] text-white'>{item.metadata.name}</div>
                                    </div>
                                    <div className='text-[16px] text-white'>
                                        {formatUnits(item.price, currencyTokenInfo.decimals)}{' '}{currencyTokenInfo.symbol}
                                    </div>
                                </div>
                            </MenuItem>)
                        })
                    }
                </Select>
            </FormControl>
        </div>
    )
}
