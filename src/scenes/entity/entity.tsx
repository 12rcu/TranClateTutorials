import {makeScene2D} from "@motion-canvas/2d";
import {createRef} from "@motion-canvas/core/lib/utils";
import {Rect} from '@motion-canvas/2d/lib/components';
import {CodeBlock, edit, insert, lines, word} from "@motion-canvas/2d/lib/components/CodeBlock";
import {slideTransition} from "@motion-canvas/core/lib/transitions";
import {Direction} from "@motion-canvas/core/lib/types";
import {waitUntil} from "@motion-canvas/core/lib/flow";

export default makeScene2D(function* (view) {
    const code = createRef<CodeBlock>()
    const addonSnippet1 = `entity {
    
    
    
    
    
    
    
    
    
}`

    yield view.add(
        <>
            <Rect
                // layout
                offset={-1}
                x={-960 + 80}
                y={-540 + 80}
                height={1080 - 160}
                width={1920 - 160}
                clip
            >
                <CodeBlock
                    selection={[
                        [
                            [0, 0],
                            [8, 100],
                        ],
                    ]}
                    ref={code}
                    fontSize={24}
                    lineHeight={36}
                    offsetX={-1}
                    x={-960 / 2}
                    fontFamily={'JetBrains Mono'}
                    code={addonSnippet1}
                />
            </Rect>
        </>
    );

    yield* slideTransition(Direction.Bottom, 1);
    yield* waitUntil('entity_initial_pause');

    yield* code().edit(1.3, lines(1,1))`entity {
    ${edit('', 'name()')}    
    
    
    
    
    
    
    
    
}`;

    yield* waitUntil('wait_entity_name');

    yield* code().edit(0.4, lines(1,1))`entity {
    ${edit('name()', 'name("unique_name", "Display Name")')}    
    
    
    
    
    
    
    
    
}`;

    yield* waitUntil('wait_entity_name_2');

    yield* code().edit(1.3, lines(2,2))`entity {
    name("unique_name", "Display Name") 
    ${edit('', 'behaviour {')}  
    
    
    
    
    
    ${edit('', '}')}  
    
}`;

    yield* waitUntil('beh');

    yield* code().edit(1.3, lines(2,9))`entity {
    name("unique_name", "Display Name")
    behaviour { 
    
    
    
    
    
    }
    ${edit('', 'resource {  }')}  
}`;

    yield* waitUntil('res');

    yield* code().edit(1.3, lines(3,7))`entity {
    name("unique_name", "Display Name")
    behaviour {
        ${edit('', 'components {')}  
            
            
            
        ${edit('', '}')}  
    }
    resource {  }
}`;

    yield* waitUntil('beh-comp');

    yield* code().edit(1.3, lines(4,6))`entity {
    name("unique_name", "Display Name")
    behaviour {
        components {
            ${edit('', 'nameAble {')} 
                ${edit('', 'alwaysShow = true')} 
            ${edit('', '}')} 
        }  
    }
    resource {  }
}`;
});