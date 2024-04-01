<script setup lang="ts">
interface Props {
    emojiIcon: string
    title: string
    holotype: string
    examples: string
    characteristics: string
    constraints: string
    idealImplementation: string
    idealDelivery: string
}

const {
    emojiIcon,
    title,
    holotype,
    examples,
    characteristics,
    constraints,
    idealImplementation,
    idealDelivery
} = defineProps<Props>()
</script>

<template>
    <div class="grid grid-cols-1 gap-4 w-full">
        <div
            class="relative flex items-start space-x-3 rounded-lg border border-gray-300 dark:border-[rgba(110,231,183,0.3)] dark:border bg-white dark:bg-[rgb(18,18,18)] px-4 py-3 shadow-sm"
        >
            <div class="flex-shrink-0">{{ emojiIcon }}</div>
            <div class="min-w-0 flex-1 flex flex-col">
                <span class="font-bold text-gray-900 dark:text-gray-100">
                    {{ title }}
                </span>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                    <strong>Holotype:</strong> {{ holotype }}<br />
                    <strong>Examples:</strong> {{ examples }}<br />
                    <strong>Characteristics:</strong> {{ characteristics }}<br />
                    <strong>Constraints:</strong> {{ constraints }}<br />
                    <strong>Ideal Implementation:</strong> {{ idealImplementation }}<br />
                    <strong>Ideal Delivery:</strong> {{ idealDelivery }}
                </span>
            </div>
        </div>
    </div>
</template>
