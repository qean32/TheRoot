import { RootMobX } from "@/component/master/modal/root-mobx";
import { useStore } from "@/lib/hook";
import type { FC } from "react";

export const ModalTokenModal: FC<{}> = () => {
    const { token: { resetToken, token } } = useStore()

    return (
        <RootMobX
            toggle={resetToken}
            view={!!token?.id}
        >
            <></>
        </RootMobX>
    )
}
