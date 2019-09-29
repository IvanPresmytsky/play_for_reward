import React from 'react';

import addHandlersToItems from './_helpers/addHandlersToItems';
import DigitsPanel from './DigitsPanel';
import digitsPanelItems from './constants/digitsPanelItems.constants';


const DigitsPanelConatainer = ({
  digitBtnHandler,
  removeBtnClickHandler,
  solveBtnHandler,
}) => {
  // order of arguments is extemly important for the logic
  const digitsPanelItemsWithHandlers = addHandlersToItems(
    digitsPanelItems,
    digitBtnHandler,
    removeBtnClickHandler,
    solveBtnHandler,
  );

  return (
    <DigitsPanel items={digitsPanelItemsWithHandlers} />
  )
}

export default DigitsPanelConatainer;