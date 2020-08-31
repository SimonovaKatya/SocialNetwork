import React from "react";
import classes from './News.module.css';

const News = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.post1}>
                start
            </div>
            <div className={classes.post2}>
                Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и
                репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной
                реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста
                как особой формы представления знаний о внешней тексту действительности.

                В лингвистике термин «текст» используется в широком значении, включая и образцы устной речи. Восприятие
                текста изучается в рамках лингвистики текста и психолингвистики. Так, например, И. Р. Гальперин
                определяет текст следующим образом: «Это письменное сообщение, объективированное в виде письменного
                документа, состоящее из ряда высказываний, объединённых разными типами лексической, грамматической и
                логической связи, имеющее определённый моральный характер, прагматическую установку и соответственно
                литературно обработанное»[1].
            </div>
            <div className={classes.post2}>
                включая и образцы устной речи. Восприятие текста изучается в рамках лингвистики текста и
                психолингвистики. Так, например, И. Р. Гальперин определяет текст следующим образом: «Это письменное
                сообщение, объективированное в виде письменного документа, состоящее из ряда высказываний, объединённых
                разными типами лексической, грамматической и логической связи, имеющее определённый моральный характер,
                прагматическую установку и соответственно литературно обработанное»[1].
            </div>

            <div className={classes.post2}>
                ком значении, включая и образцы устной речи. Восприятие текста изучается в рамках лингвистики текста и
                психолингвистики. Так, например, И. Р. Гальперин определяет текст следующим образом: «Это письменное
                сообщение, объективированное в виде письменного документа, состоящее из ряда высказываний, объединённых
                разными типами лексической, грамматической и логической связи, имеющее определённый моральный характер,
                прагматическую установку и соответственно литературно обработанное»[1].
            </div>

        </div>
    )
}

export default News;
