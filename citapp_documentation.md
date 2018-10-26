**Concealed Information Test application**

October 25, 2018

Author: Gáspár Lukács

Contact: gaspar.lukacs@univie.ac.at

Below you find the documentation of the of the Concealed Information Test application (v1.0.0), by sections _Requirements_, _Introduction_, _The CIT versions_, _Task design_, _Settings_, _Results_, _Evaluation_, _Planned features_, _References_, _Contact_.

**Requirements**

This application needs no installation whatsoever, it can and should be run in a _Google Chrome_ browser (v25 or above). (The main _CITapp.html_ file can be for example simple dragged into a new window or tab of the open browser.) There are no further dependencies or system requirements. The entire application works offline: no internet connection is needed.

**Introduction**

No deception detection method has been scientifically proven to achieve perfect or close to perfect accuracies in discriminating deceptive ("guilty") persons from truth-telling ("innocent") ones, notwithstanding the claims by some commercial services and products. The most efficient "Concealed Information Test" version in the present application ("enhanced") achieved a remarkably high accuracy in a recent study (_Lukács, Kleinberg, & Verschuere, 2017_), but even so it can only be said to provide an accuracy of roughly around 90% – under certain conditions – and it still needs further research and replications. Correspondingly, **this application is only for testing and research purposes, and no serious judgments should be based on its results**. Furthermore, anyone using it should have at least a basic understanding of how it works – see below.

**The CIT versions**

This application implements two versions of the reaction time-based Concealed Information Test (RT-CIT; _Seymour et al., 2000_; _Lukács, Kleinberg, & Verschuere, 2017_): _standard_ and _enhanced_. Both of these aim to reveal whether or not a certain information detail – the _probe_ – is known to the tested person. **The identity of the probe should not be shown to the person taking the test: the starting page must be first completed and submitted by the person who administers the test. The**  **irrelevant**  **and**  **target** **items must be similar to the probe, and indistinguishable for a person who does not know the relevance of the probe (e.g. the probe is a stolen suitcase, and the irrelevant and targets are other suitcases).**

Standard RT-CIT: it has one probe, one target, and four irrelevant items. The target item will require a different response in the task, otherwise it is the same as an irrelevant item. A person who knows the relevance of the probe (e.g., because he stole the suitcase) will tend to make slower responses to it than to the irrelevant items.

_In the standard RT-CIT, participants classify the presented stimuli as the target or as one of several non-targets by pressing one of two keys. Five non-targets are presented, among which one is the probe, which is an item that only a guilty person would recognize, and the rest are irrelevants, which are similar to the probe and thus indistinguishable from it for an innocent person. For example, in a murder case where the true murder weapon was a knife, the probe could be the word "knife," while irrelevants could be "gun," "rope," etc. Assuming that the innocent examinees are not informed about how the murder was committed, they would not know which of the items is the probe. The items are repeatedly shown in a random sequence, and all of them have to be responded to with the same response keys, except one arbitrary target – a randomly selected, originally also irrelevant item that has to be responded to with the other response key. Since guilty examinees recognize the probe as the relevant item in respect of the deception detection scenario, it will become unique among the irrelevants and in this respect more similar to the rarely occurring target. Due to this conflict between instructed response classification of probes as irrelevants on the one hand, and probe's uniqueness and, thus, greater similarity to the alternative response classification as potential targets on the other hand, the response to the probe will be generally slower in comparison to the irrelevants, and thus, based on the probe-to-irrelevant RT differences, guilty examinees can be distinguished from innocent examinees._

Enhanced RT-CIT: in addition to the items in the standard RT-CIT, this has familiarity-related "inducer" items that increase the awareness of the lie detection context, and thereby largely increase the probe-irrelevant difference (even slower responses to the probe).

_These inducer items induce a particular semantic context that increases the sensitivity of the method for the deception-related meaning of the probe. In the original study [link], the probes were general autobiographical details (birthday, favorite color, etc.), and, correspondingly, the inducers were familiarity-related: Inducers referring to the category familiar (e.g., "FAMILIAR," "MINE") had to be categorized with the same key as the target and, thus, with the opposite key than the probe (and the irrelevants), while inducers referring to the category unfamiliar (e.g., "OTHER," "THEIRS") had to be categorized with the same key as the probe (and irrelevants). It was assumed that in this way the inducers draw attention to the semantic meaning of the alternative response choices in view of the deception detection scenario (namely, that guilty examinees are denying their familiarity with the probe), thereby increasing the response conflict when the probe appears, making the response even slower. Moreover, the increased cognitive load (due to the increased complexity) also requires more attention throughout the task, which likely facilitates deeper processing of the stimuli. This method robustly increased the CIT accuracy of distinguishing guilty examinees from innocent ones._

**Task design**

The number of blocks can be chosen (1, 2, or 3). One block has the same length and arrangement as in all recent studies (_Lukács, Kleinberg, & Verschuere, 2017_). There is no data to show how many blocks per item categories (one probe with corresponding target and irrelevants) are optimal, but, as a rule of thumb, one block should give a fair estimation on the group level, while more than three would probably not serve much additional information even on the individual level.

_In each block, each probe, irrelevant, and target is repeated 18 times (hence altogether 54 probe, 216 irrelevant, and 54 target trials). The order of the items is randomized in groups: first, all six items (one probe, four irrelevant, and one target) in the given category are presented in a random order, then the same six items are presented in another random order (but with the restriction that the first item in the next group is never the same as the last item in the previous group). In the enhanced version, inducers are placed among these items in a random order, but with the restrictions that an inducer trial is never followed by another inducer trial, and each of the nine inducers (three familiarity-referring, six unfamiliarity- referring) precedes each of the three probes, three targets (for Induced, but not for No-target), and 12 irrelevants exactly one time. (Thus 9 × 18 = 162 inducers are presented in the Induced CIT, and 162 out of the 324 other items are preceded by an inducer.)_

_The main task is preceded by a comprehension check and two practice tasks. The check serves to ensure that the participant fully understands the task. This phase includes all items presented once, including each of the nine possible inducers for the enhanced version. In this phase, participants has plenty of time (10 s) to choose a response – however, each trial requires a correct response. In case of an incorrect response, the phase has to be repeated._

_In the following first practice task, the response window is longer (2 s), while the second practice task had the same design as the main task (800 ms response window). Both practice tasks consist of 9-14 trials, containing all possible main items in each, and several random inducer items in case of the enhanced version. In either practice task, in case of too few valid responses, the participants receives a corresponding feedback, and have to repeat the practice task. The requirement is a minimum 60% valid responses (correct key between 150 and 800 ms) for each of the following item types (when the given type exists in the given CIT version): targets; familiarity-referring inducers; unfamiliarity-referring inducers; main items (probes and irrelevants together)._

**Settings**

Currently the settings (apart from those on the main page) involve only the possibility to change the captions on the screen. These all contain their default value on start-up, which can be overwritten if needed. In particular, inducers may be modified to the native language of the examinee. The instructions can be either explained or (since precise translation is not of essence in this case) they can be auto-translated (e.g. Google-translate in Chrome).

**Results**

At the end of the test, first there is only a simple notification that the test has ended. This has to be closed using a red X button at the bottom right. Afterwards, the full results data can be accessed several ways. Using two separate buttons, it may be downloaded as a file, or copied to the system clipboard so that it may be pasted into an editor and saved. (The data is actually automatically copied to the clipboard at the end of the task; the button serves only in case the clipboard content is lost.) The data contains all responses (one per row) from the test, with all relevant information, corresponding to the self-explanatory titles in the first row.

_**subject\_id**: The subject identification text as given on the starting page._

_**cit\_version**: The CIT version as selected on the starting page._

_**block\_number**: The number of the block._

_**trial\_number**: The number of the trial._

_**stimulus\_shown**: The specific text of the stimulus that was displayed on the screen._

_**category**: Either "main\_item" (probe, irrelevant, or target), or "inducer" (familiar-referring or unfamiliar-referring)._

_**stim\_type**: More specific type: probe, irrelevant, target, familiar-referring inducer, or unfamiliar-referring inducer._

_**response\_key**: The response key that was used ("e" or "i"), regardless whether it was correct or not._

_**rt**: The response time (from the start of the presentation of the stimulus until the pressing of the response key); in ms._

_**incorrect**: Whether the response was correct: 1 for incorrect, 0 for correct._

_**too\_slow**: Whether the response was too slow: 1 for too slow, 0 for not too slow._

_**date\_in\_ms**: The number of milliseconds elapsed since January 1, 1970, 00:00:00 UTC. (This documents the exact time and duration of the experiment, allows to calculate the length of pauses taken between the blocks, etc.)_

**Evaluation**

As an intra-individual effect size (_Noordraven & Verschuere, 2013_), a _d-CIT_ can be calculated as the probe RT mean minus the irrelevant RT mean, divided by the standard deviation of irrelevant RTs: ( _M_(probe) - _M_(irrelevant) ) / _SD_(irrelevant)

This can be calculated from the results file, but it is also already automatically calculated and displayed at the end of each test in this application.

The values of this measure typically fall between around -0.3 and 0.8; where a larger number always indicates a larger likelihood of guilt (i.e., recognition of the probe). The optimal cut-off value used as a boundary for the evaluation as guilty or innocent varies by study.

Still, for an immediate informative feedback for each test in this application, evaluative labels were implemented with boundaries based on a rough approximation in view of previous results. These boundaries are depicted in the following table.

| **Boundaries** |  **Evaluative label** |
| --- |  --- |
| _d-CIT_ > 0.4 | strong indication of guilt |
| _d-CIT_ > 0.3 and _d-CIT_ <= 0 .4 | fair indication of guilt |
| _d-CIT_ > 0.1 and _d-CIT_ <= 0 .3 | weak indication of guilt |
| _d-CIT_ > 0 and _d-CIT_ <= 0 .1 | indeterminate |
| _d-CIT_ > -0.1 and _d-CIT_ <= 0 | weak indication of innocence |
| _d-CIT_ <=- 0.1 | fair indication of innocence |

(Note that there is no strong indication of innocence: a very fast probe response is no more expected in case of innocence than in case of guilt.)

**Planned features**

- A no-target version will be implemented as soon as the related manuscript is accepted for publication
- More detailed end feedback; graphs based on the results (e.g. RT density per item)
- More settings; in particular the possibility to change any of the instruction texts
- Possibility to store settings locally
- Graphic (pictorial) stimuli

**References**

Lukács, G., Kleinberg, B., & Verschuere, B. (2017). Familiarity-related fillers improve the validity of reaction time-based memory detection. _Journal of Applied Research in Memory and Cognition, 6_(3), 295–305. https://doi.org/10.1016/j.jarmac.2017.01.013

Noordraven, E., & Verschuere, B. (2013). Predicting the Sensitivity of the Reaction Time-based Concealed Information Test: Detecting deception with the Concealed Information Test. _Applied Cognitive Psychology, 27_(3), 328–335. https://doi.org/10.1002/acp.2910

Seymour, T. L., Seifert, C. M., Shafto, M. G., & Mosmann, A. L. (2000). Using response time measures to assess "guilty knowledge". _Journal of Applied Psychology, 85_(1), 30–37. https://doi.org/10.1037//0021-9010.85.1.30