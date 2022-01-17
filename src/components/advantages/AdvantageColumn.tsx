import React from 'react'
import { Icon, SemanticICONS } from 'semantic-ui-react'

interface Props {
  iconName: SemanticICONS
  iconColor: string
  advantageTitle: string
  advantageText: string
}

function AdvantageColumn({
  iconName,
  iconColor,
  advantageTitle,
  advantageText,
}: Props) {
  return (
    <div className="flex flex-col items-center flex-1">
      <div
        className="flex flex-col items-center justify-center px-[15px] rounded-full py-[20px]"
        style={{ backgroundColor: iconColor }}
      >
        <Icon className="!mr-0" inverted size="huge" name={iconName} />
      </div>
      <h3 className="self-start text-2xl font-normal md:text-3xl font-thesans-bold">
        {advantageTitle}
      </h3>
      <p className="prose-xl">{advantageText}</p>
    </div>
  )
}

export default AdvantageColumn
