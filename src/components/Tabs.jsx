export default function Tabs({children, buttons, buttonContainer='menu'}){
    const ButtonsContainer = buttonContainer
    return <>
    <ButtonsContainer>
     {buttons}
    </ButtonsContainer>
    {children}
    </>
}