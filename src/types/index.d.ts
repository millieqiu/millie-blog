/// <reference types="../../.astro/types" />
/// <reference types="astro" />

type Post = import('astro:content').CollectionEntry<'posts', 'daily'>

// type Daily = import('astro:content').CollectionEntry<'daily'>

type Page = import("astro").Page<Post>

