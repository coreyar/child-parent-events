import { NewChild } from '../generated/Parent/Parent'
import { Child as ChildContract } from '../generated/Parent/Child';
import { Child } from '../generated/schema'

export function handleNewChild(event: NewChild): void {
  let child = new Child(event.params.son.toHexString())
  const childContract = ChildContract.bind(event.params.son);
  
  child.name = childContract.NAME();
  child.parent = event.address;
  child.save()
}
