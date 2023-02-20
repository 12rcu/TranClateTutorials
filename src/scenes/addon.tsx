import {makeScene2D} from "@motion-canvas/2d";
import {createRef} from "@motion-canvas/core/lib/utils";
import {Rect} from '@motion-canvas/2d/lib/components';
import {CodeBlock, edit, insert, lines, word} from "@motion-canvas/2d/lib/components/CodeBlock";
import {slideTransition} from "@motion-canvas/core/lib/transitions";
import {Direction} from "@motion-canvas/core/lib/types";
import {waitUntil} from "@motion-canvas/core/lib/flow";

export default makeScene2D(function* (view) {
    const code = createRef<CodeBlock>()
    const addonSnippet1 = `addon({
    projectName = "my Project"
    projectShort = "mp"
    projectShort = "Minecraft + TranClate = ❤️"
    world = getResource("world/template-world")
}) {



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
    yield* waitUntil('initial_pause');
    yield* code().selection(lines(1), 1.3);
    yield* code().selection(lines(2), 1.3);
    yield* code().selection(lines(3), 1.3);
    yield* code().selection(lines(4), 1.3);

    yield * code().selection(lines(0,9), 1.3);

    yield* waitUntil('addon_header_pause');

    yield* code().edit(1.3, false)`addon({
    projectName = "my Project"
    projectShort = "mp"
    projectShort = "Minecraft + TranClate = ❤️"
    world = getResource("world/template-world")
}) {
    ${edit('', 'entity {')}

    ${edit('', '}')}
}`;

    yield* waitUntil('end');
});