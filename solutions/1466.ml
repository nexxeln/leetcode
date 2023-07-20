let createGraph n connections =
  let graph = Array.make n [] in

  List.iter
    (fun (a, b) ->
      graph.(a) <- (b, 1) :: graph.(a);
      graph.(b) <- (a, 0) :: graph.(b))
    connections;

  graph

let minReorder n connections =
  let graph = createGraph n connections in

  let visited = ref [] in

  let res = ref 0 in

  let rec dfs city graph visited =
    visited := city :: !visited;

    List.iter
      (fun (neighbor, reverse) ->
        if not (List.mem neighbor !visited) then (
          res := !res + reverse;
          dfs neighbor graph visited))
      graph.(city)
  in

  dfs 0 graph visited;
  !res
