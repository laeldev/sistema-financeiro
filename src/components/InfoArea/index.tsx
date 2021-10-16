import * as C from './styles';
import {formatCurrentMonth} from '../../helpers/dateFilter';

type Props={
    currentMonth: string;
}

export const InfoArea = ({currentMonth}: Props) => {
    const handlePrevMonth =() =>{

    }
    
    const handleNextMonth =() =>{

    }

    return(
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>

            </C.ResumeArea>
        </C.Container>

    );
}

/* 1:31:06 */