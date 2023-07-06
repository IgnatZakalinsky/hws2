import React, {useState} from "react"
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan"
import {restoreState, saveState} from "./localStorage/localStorage"
import s2 from "../../s1-main/App.module.css"
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton"
import s from "./HW6.module.css"

const HW6 = () => {
    const [value, setValue] = useState<string>("")

    const save = () => {
        return saveState<string>("hw6-editable-span-value", value)
    }

    const restore = () => {
        setValue(restoreState<string>("hw6-editable-span-value", ""))
    }

    return (
        <div id={"hw6"}>
            <div className={s2.hwTitle}>Homework #6</div>
            <hr/>

            {/*демонстрация возможностей компоненты:*/}
            <div className={s2.hw}>
                <div className={s.editableSpanContainer}>
                    <SuperEditableSpan
                        id={"hw6-spanable-input"}
                        value={value}
                        onChangeText={setValue}
                        spanProps={{
                            id: "hw6-editable-span",
                            defaultText: "Edit text",
                        }}
                    />
                </div>

                <div className={s.buttonsContainer}>
                    <SuperButton id={"hw6-save"} onClick={save}>
                        Save to ls
                    </SuperButton>
                    <SuperButton
                        id={"hw6-restore"}
                        onClick={restore}
                        xType={"secondary"}
                    >
                        Get from ls
                    </SuperButton>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default HW6

