import { Splitter } from '~/components/ui/splitter'

export const Demo = (props: Splitter.RootProps) => {
  return (
    <Splitter.Root {...props} panels={[{ id: 'a' }, { id: 'b' }]}>
      <Splitter.Panel id="a">A</Splitter.Panel>
      <Splitter.ResizeTrigger id="a:b" />
      <Splitter.Panel id="b">B</Splitter.Panel>
    </Splitter.Root>
  )
}
