import React, { useState, useEffect } from 'react';

const MultiLevelCheckbox = ({selectedValueKey="id", isSearchBox=false, searchboxPlaceholder="", data, checkedItems, setCheckedItems, singleSelect, nameKey = "label" }: any) => {

    const [expandedItems, setExpandedItems] = useState<any>({});
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredData, setFilteredData] = useState<any>(data);

    useEffect(() => {
        const filterData = (items: any, term: string) => {
            return items?.reduce((acc: any, item: any) => {
                if (item[nameKey]?.toLowerCase().includes(term?.toLowerCase())) {
                    acc.push({ ...item, children: filterData(item.children || [], term) });
                } else if (item.children) {
                    const filteredChildren = filterData(item.children, term);
                    if (filteredChildren.length > 0) {
                        acc.push({ ...item, children: filteredChildren });
                    }
                }
                return acc;
            }, []);
        };

        setFilteredData(filterData(data, searchTerm));
    }, [data, searchTerm, nameKey]);

    const handleCheckboxChange = (id: any, checked: any) => {
        setCheckedItems((prevSelectedItems: any) => {
            let newSelectedItems;

            if (singleSelect) {
                newSelectedItems = checked ? new Set([id]) : new Set();
            } else {
                newSelectedItems = new Set(prevSelectedItems);
                if (checked) {
                    newSelectedItems.add(id);
                } else {
                    newSelectedItems.delete(id);
                }
                updateChildren(data, id, checked, newSelectedItems);
            }
            return newSelectedItems;
        });
    };

    const updateChildren = (items: any, id: any, checked: any, newSelectedItems: any) => {
        items.forEach((item: any) => {
            if (item.id == id) {
                item?.children?.forEach((child: any) => {
                    if (checked) {
                        newSelectedItems.add(child.id);
                    } else {
                        newSelectedItems.delete(child.id);
                    }
                    updateChildren([child], child.id, checked, newSelectedItems);
                });
            } else if (item.children) {
                updateChildren(item.children, id, checked, newSelectedItems);
            }
        });
    };

    const handleToggle = (id: any) => {
        setExpandedItems((prevState: any) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const renderCheckbox = (item: any) => (
        <li key={item.id}>
            <div className="FilterIn">
                <label className="filterList">
                    <input
                        type="checkbox"
                        checked={checkedItems?.has(item[selectedValueKey].toString())}
                        onChange={(e) => handleCheckboxChange(item[selectedValueKey].toString(), e.target.checked)}
                    />
                    {item?.color && <span className="colorCircle" style={{ backgroundColor: item.color }}></span>}
                    {item?.[nameKey]}
                </label>
                {item?.children?.length > 0 && (
                    <button
                        className="DropToggle AsLink"
                        onClick={() => handleToggle(item.id)}
                    >
                        {expandedItems[item.id] ? '-' : '+'}
                    </button>
                )}
            </div>
            {expandedItems[item.id] && item.children && (
                <ul className='ps-3'>
                    {item.children.map((child: any) => renderCheckbox(child))}
                </ul>
            )}
        </li>
    );

    return (
        <>
        {isSearchBox && <div className="searchOuter">
            <input type="text" placeholder={searchboxPlaceholder} value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
            <button className="headerSearchIcon  bg-image" style={{ backgroundPosition: "-411px -132px" }}></button>
        </div>}
            <div className="ListingBlock">

                <ul>
                    {filteredData?.map((item: any) => renderCheckbox(item))}
                </ul>
            </div>
            <div className="text-end">
                <button className="AsLink ms-auto"
                    onClick={() => {
                        setCheckedItems(new Set());
                        setExpandedItems({})
                    }}>RESET
                </button>
            </div>
        </>
    );
};

export default MultiLevelCheckbox;
